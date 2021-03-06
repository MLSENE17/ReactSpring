package com.api.backendSchool.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Entity
@Data
@Table(name="users",
	uniqueConstraints = { 
			@UniqueConstraint(columnNames = "email") 
		})
public class User {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotBlank
	@Email
	@Size(max=50)
	private String email;
	@NotBlank
	@Size(max=120)
	private String password;
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name="user_roles",
			joinColumns = @JoinColumn(name="user_id"),
			inverseJoinColumns = @JoinColumn(name="role_id")
				)
	private Set<Role> roles= new HashSet<>();
	public User() {
	}
	public User(String email,String password) {
		this.email = email;
		this.password = password;
	}
}
