package com.example.test.infrastructure.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serial;
import java.io.Serializable;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class CustomerRequest implements Serializable {

  @Serial
  private static final long serialVersionUID = 614015548881635883L;


  private PersonRequest person;

  private String reference;

}
