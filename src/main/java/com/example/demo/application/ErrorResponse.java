package com.example.demo.application;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Getter
@Builder
@JsonInclude(Include.NON_EMPTY)
public class ErrorResponse implements Serializable {

    @Serial
    private static final long serialVersionUID = 8080331037437344947L;

    private final Integer code;
    private final Integer id;
    private final String message;
    private final String resource;
    private final List<ErrorFieldResponse> errorFields;
    private final LocalDateTime timestamp = LocalDateTime.now();

    @AllArgsConstructor
    @Getter
    @Builder
    @JsonInclude(Include.NON_EMPTY)
    public static class ErrorFieldResponse implements Serializable {

        @Serial
        private static final long serialVersionUID = 762366036282087559L;

        private final String message;
        private final String field;
    }
}
