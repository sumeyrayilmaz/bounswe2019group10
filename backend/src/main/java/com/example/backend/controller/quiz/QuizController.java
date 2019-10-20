package com.example.backend.controller.quiz;


import com.example.backend.config.JwtTokenUtil;
import com.example.backend.model.member.Member;
import com.example.backend.model.quiz.QuizRequest;
import com.example.backend.service.member.JwtUserDetailsService;
import com.example.backend.service.quiz.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @GetMapping()
    public ResponseEntity<?> getAllQuizzes() {
        return ResponseEntity.ok(quizService.findAll());
    }

    @GetMapping("/{quizId}")
    public ResponseEntity<?> getById(@PathVariable int quizId) {
        return ResponseEntity.ok(quizService.getById(quizId));
    }

    @GetMapping("/level")
    public ResponseEntity<?> getLevelQuiz() {
        return ResponseEntity.ok(quizService.getById(66));
    }

    @PostMapping("/{quizId}/submit")
    public ResponseEntity<?> evaluateQuizRequest(@PathVariable int quizId, @RequestBody QuizRequest quizRequest, HttpServletRequest request) {
        int score;
        //TODO remove the following and add a global method that can be used by all classes
        final String requestTokenHeader = request.getHeader("Authorization");
        String jwtToken = null;
        // JWT Token is in the form "Bearer token". Remove Bearer word and get
        // only the Token
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
        }


        String memberUname = jwtTokenUtil.getUsernameFromToken(jwtToken);
        QuizRequest qRequest = quizService.evaluateQuiz(quizRequest, memberUname);
        return ResponseEntity.ok(qRequest);
    }

}
