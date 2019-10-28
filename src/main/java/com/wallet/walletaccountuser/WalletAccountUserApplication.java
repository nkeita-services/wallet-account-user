package com.wallet.walletaccountuser;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import com.wallet.walletaccountuser.entity.User;
import java.util.List;
import java.util.ArrayList;

@SpringBootApplication
@EnableSwagger2
public class WalletAccountUserApplication {

	@Value("${TARGET:World}")
	String target;

	@RestController
	class WalletAccountUserController {

		@GetMapping("/users")
		List<User> all() {
			return new ArrayList<User>();
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(WalletAccountUserApplication.class, args);
	}
}
