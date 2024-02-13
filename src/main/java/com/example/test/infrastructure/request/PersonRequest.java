package com.example.test.infrastructure.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

@NoArgsConstructor
@Getter
public class PersonRequest implements Serializable {

    @Serial
    private static final long serialVersionUID = -4276196622211080058L;


    private String name;
    private String surname;
    private String dni;
    private LocalDate dateOfBirth;
}
