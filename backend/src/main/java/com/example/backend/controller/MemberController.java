package com.example.backend.controller;

import com.example.backend.domain.Member;
import com.example.backend.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    MemberService memberService;

    @GetMapping("/user")
    public String getUser(){
        return "user";
    }

    @GetMapping("/login")
    public String getMember(@RequestParam(value="nickname") String name, @RequestParam(value="password") String pass){
        Member member = memberService.getMember(name, pass);
        return member.getName() + " " + member.getPassword();
    }

    @PostMapping("/create")
    public String createMember(@RequestParam(value="nickname") String name, @RequestParam(value="password") String pass){
        memberService.createAccount(name, pass);
        return "done";
    }



}