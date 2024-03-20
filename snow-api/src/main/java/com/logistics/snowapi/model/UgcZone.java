package com.logistics.snowapi.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "ugc_zone")
public class UgcZone {
    @Id
    @Column(name = "ugc_code", nullable = false, length = 6)
    private String ugcCode;

    @Column(name = "visibility")
    private Integer visibility;

    @ManyToMany(mappedBy = "ugcZones")
    private Set<Alert> alerts = new LinkedHashSet<>();
    @ManyToMany(mappedBy = "ugcZones")
    private Set<Boundary> boundaries = new LinkedHashSet<>();

/*
 TODO [Reverse Engineering] create field to map the 'the_geom' column
 Available actions: Define target Java type | Uncomment as is | Remove column mapping
    @Column(name = "the_geom", columnDefinition = "geometry")
    private Object theGeom;
*/
}