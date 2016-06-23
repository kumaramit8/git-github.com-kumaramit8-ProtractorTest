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
	            param("name", "Jai Sri Ramsita Jee!").
	        when().
	            get("http://computer-database.herokuapp.com/computers").
	        then().contentType(ContentType.HTML).
	        statusCode(200); // check http status code
      
	    }
	  @Test
	    public void checkputMethod()
	    {
	        RestAssured.given().
	          param("name", "Jai Sri Ramasita Jee!").
	        when().
	        put("http://computer-database.herokuapp.com/computer").
            
	        then().contentType(ContentType.HTML).
	        statusCode(404); // check http status code
	       
	    }
	  @Test
	    public void checkdeleteMethod()
	    {
	        RestAssured.given().
	           // param("name", "Jai Sri Ramasita Jee!").
	            //param("name", "Jai Sri Ramasita Jee1!").
	            
	        when().//put("/book/{hotelName}/{roomNumber}", "Hotels R Us", 22);.
	        	delete("http://computer-database.herokuapp.com/computers/385").
	        then().
	        	contentType(ContentType.HTML).
	        	statusCode(404); // check http status code
	       
	    }
}
