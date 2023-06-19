package com.example.reactLink;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Message {

    @Id
    @GeneratedValue
    private Long id;
    private String sender;
    private String contents;

    Message(){

    };

    public Message(String sender,String contents){
        this.sender = sender;
        this.contents = contents;


    }

    public Long getId() {
        return id;
    }

    public String getSender() {
        return sender;
    }

    public String getContents() {
        return contents;
    }
}
