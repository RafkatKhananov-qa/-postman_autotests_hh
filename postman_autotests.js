// https://api.hh.ru/employers/5008932

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Наличие в ответе поля про открытые вакансии", function () {
    pm.expect(pm.response.text()).to.include("open_vacancies");
});

pm.test("Сравнение поля id", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.id).to.eql('5008932');
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(150);
});
    
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
