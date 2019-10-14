package com.example.yallp_android.activities;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.yallp_android.R;
import com.example.yallp_android.models.LoginUserWithEmail;
import com.example.yallp_android.models.LoginUserWithName;
import com.example.yallp_android.util.RetroClients.UserRetroClient;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class SignInActivity extends AppCompatActivity {

    private ImageView backButton;
    private Button signInButton;
    private  EditText nameOrEmail;
    private  EditText password;
    private Boolean isEmailEntered = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_signin);
        backButton = findViewById(R.id.leftArrow);
        backButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        nameOrEmail = findViewById(R.id.name);
        password = findViewById(R.id.password);

        signInButton = findViewById(R.id.signInButton);
        signInButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(nameOrEmail.getText().toString().contains("@")) isEmailEntered = true;
                if(!isEmpty(nameOrEmail) && !isEmpty(password) && (!isEmailEntered || isValidEmail(nameOrEmail))){
                    signIn();
                }
            }
        });
    }

    public boolean isEmpty(EditText editText){
        if (editText.getText().toString().trim().length() > 0) {
            return false;
        }
        editText.setError("Please Fill This");
        editText.requestFocus();
        return true;
    }

    public boolean isValidEmail(EditText editText){
        if(!android.util.Patterns.EMAIL_ADDRESS.matcher(editText.getText().toString()).matches()){
            editText.setError("Please enter a valid email");
            editText.requestFocus();
            return false;
        }
        return true;
    }

    public void signIn(){
        final ProgressDialog progressDialog = new ProgressDialog(SignInActivity.this);
        progressDialog.setCancelable(false);
        progressDialog.setMessage("Please Wait");
        progressDialog.show();

        Call<ResponseBody> call;

        if(isEmailEntered){
            call = UserRetroClient.getInstance().getUserApi().loginWithEmail(
                    new LoginUserWithEmail(nameOrEmail.getText().toString(),password.getText().toString()));

        }else{
            call = UserRetroClient.getInstance().getUserApi().loginWithName(
                    new LoginUserWithName(nameOrEmail.getText().toString(),password.getText().toString()));

        }

        call.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                if(response.isSuccessful()){
                    progressDialog.dismiss();
                    Intent intent = new Intent(getApplicationContext(), ProfileActivity.class);
                    startActivity(intent);
                }else{
                    progressDialog.dismiss();
                }
            }

            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {

            }
        });
    }
}
