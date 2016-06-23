// spec.js
describe('Create Computer', function() {
		
		beforeEach(function() {
		browser.ignoreSynchronization = true; 
		browser.get('http://computer-database.herokuapp.com/computers');
		
		});
	function addUpdateComputer(strName,strStartDate,strEndDate,strCompany,strAsserttext) {
		
		element(by.id("name")).clear();
		element(by.id("name")).sendKeys(strName);
		element(by.id("introduced")).clear();
		element(by.id("introduced")).sendKeys(strStartDate);
		element(by.id("discontinued")).clear();
		element(by.id("discontinued")).sendKeys(strEndDate);
		element(by.id("company")).sendKeys(strCompany);
		//browser.pause();
		var btn_add = element(by.xpath('//*[@id="main"]/form/div/input'));
		btn_add.click();
		var outputtext = browser.findElement(by.xpath('//*[@id="main"]/div[1]'));
		expect(outputtext.getText()).toContain(strAsserttext);
		//Done! Computer Test01 has been created
	
	}
	function ReadComputer(strName,strStartDate,strEndDate,strCompany) {
	
		expect(element(by.id("name")).getAttribute('value')).toEqual(strName);
		expect(element(by.id("introduced")).getAttribute('value')).toEqual(strStartDate);
		expect(element(by.id("discontinued")).getAttribute('value')).toEqual(strEndDate);
		expect(element(by.id("company")).getAttribute('value')).toEqual(strCompany);
	
	}

  it('Should have Title', function() {
    
  		  expect(browser.getTitle()).toContain('Computers');
  });
   it('Should Add Computer', function() {
   		   
   		var btn_add = element(by.id('add'));
   		btn_add.click();
   		var li = browser.findElement(by.xpath('//*[@id="main"]/h1'));
   		expect(li.getText()).toBe('Add a computer');
    		   		// get today's date
		//var today = new Date();
		//var dd = today.getDate();
		//var nextdd=today.getDate()+1;
		//var mm = today.getMonth();
		//var yyyy = today.getFullYear();
		//var strFromdate = yyyy+'-'+mm+'-'+dd;
		//var strToDate= yyyy+'-'+mm+'-'+nextdd;
   		 addUpdateComputer("TestComputerDH01","2016-06-27","2016-06-28","IBM","Done! Computer TestComputerDH01 has been created");
   		//addUpdateComputer("Test01",strFromdate,strToDate,"IBM","Done! Computer Test01 has been created");   
   		   //browser.close();
   		  // browser.pause();
   });
	it('Should Read Computer', function() {
		
		//var today = new Date();
		//var dd = today.getDate();
		//var nextdd=today.getDate()+1;
		//var mm = today.getMonth();
		//var yyyy = today.getFullYear();
		//var strFromdate = yyyy+'-'+mm+'-'+dd;
		//var strToDate= yyyy+'-'+mm+'-'+nextdd;
		expect(browser.getTitle()).toContain('Computers');
		element(by.id("searchbox")).clear();
		element(by.id("searchbox")).sendKeys("TestComputerDH01");
		var btn_add = element(by.id("searchsubmit"));
		btn_add.click();
		var searchOutput = browser.findElement(by.xpath('//*[@id="main"]/h1'));
		expect(searchOutput.getText()).toContain('computers found');
		var grid = $$('.k-grid-content tr');
		grid.each(function(row) {
		var rowElems = row.$$('td');
		expect(rowElems.get(0).getText()).toMatch('TestComputerDH01');
							});
		var tabledata =element.all(by.css("./table")); 
		browser.findElement(By.linkText("TestComputerDH01")).click();
		ReadComputer("TestComputerDH01","2016-06-27","2016-06-28","13");
		var btn_cancel= browser.findElement(by.xpath('//*[@id="main"]/form[1]/div/a'));
		btn_cancel.click();
		var searchOutput = browser.findElement(by.xpath('//*[@id="main"]/h1'));
		expect(searchOutput.getText()).toContain('computers found');
		//browser.pause();
	
	});
	
	it('Should Update Computer', function() {
	
		expect(browser.getTitle()).toContain('Computers');
		element(by.id("searchbox")).clear();
		element(by.id("searchbox")).sendKeys("TestComputerDH01");
		var btn_add = element(by.id("searchsubmit"));
		btn_add.click();
		browser.findElement(By.linkText("TestComputerDH01")).click();
		var liUpdate = browser.findElement(by.xpath('//*[@id="main"]/h1'));
		expect(liUpdate.getText()).toBe('Edit computer');
		addUpdateComputer("TestComputerDHUpdate01","2016-06-27","2016-06-28","IBM","Done! Computer TestComputerDHUpdate01 has been updated");
		
		//browser.pause();
		});
	it('Should Delete Computer', function() {
		expect(browser.getTitle()).toContain('Computers');
		element(by.id("searchbox")).clear();
		element(by.id("searchbox")).sendKeys("TestComputerDHUpdate01");
		var btn_add = element(by.id("searchsubmit"));
		btn_add.click();
		browser.findElement(By.linkText("TestComputerDHUpdate01")).click();
		var liUpdate = browser.findElement(by.xpath('//*[@id="main"]/h1'));
		expect(liUpdate.getText()).toBe('Edit computer');
		var btn_delete = element(by.css('#main > form.topRight > input'));
		btn_delete.click();
		var liDelete = browser.findElement(by.xpath('//*[@id="main"]/div[1]'));
		expect(liDelete.getText()).toBe('Done! Computer has been deleted');
			
		//browser.pause();
	});
});
