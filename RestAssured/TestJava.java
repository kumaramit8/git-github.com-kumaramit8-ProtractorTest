package com.ip.httpClient2.AddComp;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.RestAssured.*;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.matcher.RestAssuredMatchers.*;
import com.jayway.restassured.response.Response;
import org.hamcrest.Matchers;
import org.junit.Test;

public class TestJava {
	public static Response response;
	public static String jsonAsString;
	  @Test
	    public void checkPostMethod()
	    {
	        RestAssured.given().
	            param("name", "Jai Sri Ramsita Jee!").
	        when().
	            post("http://computer-database.herokuapp.com/computers").
	        then().contentType(ContentType.HTML).
            statusCode(200); // check http status code
              
	    }
	  @Test
	    public void checkGetMethod()
	    {
	        RestAssured.given().
	         //   param("name", "Jai Sri Ramsita Jee!").
	        when().
	            get("http://computer-database.herokuapp.com/computers?f=ace").
	        then().contentType(ContentType.HTML).
          statusCode(200); // check http status code
      
	    }
	  @Test
	    public void checkDeletetMethod()
	    {
	        RestAssured.given().
	         //   param("name", "Jai Sri Ramsita Jee!").
	        when().
	            delete("http://computer-database.herokuapp.com/computers/381").
	        then().contentType(ContentType.HTML).
        statusCode(200); // check http status code
    
	    }
	  
	}
