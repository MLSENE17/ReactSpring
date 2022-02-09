package com.api.backendSchool.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.api.backendSchool.model.User;
import com.api.backendSchool.repository.UserRepository;
@Service
public class UserDetailsServiceImpl implements UserDetailsService  {
	@Autowired
	UserRepository userRepository;
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = this.userRepository.findByEmail(email)
					.orElseThrow(
							()->new UsernameNotFoundException("User Not Found with email: " + email)
							);
		return  UserDetailsImpl.build(user);
	}

}