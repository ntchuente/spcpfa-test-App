package com.mycompany.myapp.service.mapper;

import org.junit.jupiter.api.BeforeEach;

class PersonMapperTest {

    private PersonMapper personMapper;

    @BeforeEach
    public void setUp() {
        personMapper = new PersonMapperImpl();
    }
}
