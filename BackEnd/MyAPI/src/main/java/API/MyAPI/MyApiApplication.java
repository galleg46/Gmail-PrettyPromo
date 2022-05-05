package API.MyAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RestController
public class MyApiApplication {

	@RequestMapping("/allEmails")
	public Map<String, Object> home()

	public static void main(String[] args) {
		SpringApplication.run(MyApiApplication.class, args);
	}

}
