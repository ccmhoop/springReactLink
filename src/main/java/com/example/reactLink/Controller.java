package com.example.reactLink;

import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Scanner;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class Controller {

    private static String name;
    private static int rating;
    @Autowired
    private MessageRepository messageRepository;


    @GetMapping("message/{id}")
    public Message getMessage(@PathVariable("id") Long id) {
        return messageRepository.findById(id).get();
    }

    @PostMapping("save")
    public void saveMessage(@RequestBody Message message) {
        messageRepository.save(message);
        System.out.println("Message stored");
    }

}
















