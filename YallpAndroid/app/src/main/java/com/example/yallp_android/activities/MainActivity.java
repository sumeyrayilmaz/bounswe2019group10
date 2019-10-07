package com.example.yallp_android.activities;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.Window;

import androidx.appcompat.app.AppCompatActivity;

import com.example.yallp_android.R;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_main);
    }
    public void getStarted(View view){
        Intent i = new Intent(this,GetStartedActivity.class);
        startActivity(i);
    }

    public void signIn(View view){
        Intent i = new Intent(this,SignInActivity.class);
        startActivity(i);
    }
}
