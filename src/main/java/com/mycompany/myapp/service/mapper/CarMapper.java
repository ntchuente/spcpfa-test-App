package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.Car;
import com.mycompany.myapp.domain.Person;
import com.mycompany.myapp.service.dto.CarDTO;
import com.mycompany.myapp.service.dto.PersonDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Car} and its DTO {@link CarDTO}.
 */
@Mapper(componentModel = "spring")
public interface CarMapper extends EntityMapper<CarDTO, Car> {
    @Mapping(target = "person", source = "person", qualifiedByName = "personId")
    CarDTO toDto(Car s);

    @Named("personId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    PersonDTO toDtoPersonId(Person person);
}
