package com.wallet.walletaccountuser;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RedocController {
	@GetMapping("/doc/swagger/redoc")
	String get(){
		return "redoc";
	}
}
