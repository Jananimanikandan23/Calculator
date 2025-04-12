package com.example.calculator.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calculator")
@CrossOrigin(origins = "http://localhost:3000")
public class CalculatorController {
	
	@GetMapping("/calculate")
	public double calculate(
			@RequestParam double num1, 
			@RequestParam double num2,
			@RequestParam String operation) {
		switch (operation) {
		case "add":
			return num1 + num2;
		case "subtract":
			return num1 - num2;
		case "multiply":
			return num1 * num2;
		case "divide":
			if(num2 == 0) throw new IllegalArgumentException("Cannot divide by zero");
			return num1 / num2;
		case "modulus":
			return num1 % num2;
		case "square":
			if (num1 < 0) throw new IllegalArgumentException("Cannot calculate square root of negative number");
			return Math.sqrt(num1);
		case "sqrt":
			if (num1 < 0) throw new IllegalArgumentException("Cannot calculate square root of negative number");
			return num1 *   num1;
		default:
			throw new IllegalArgumentException("Invalid operation");
		}
	}

}
