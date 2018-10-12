/* This is not the prettiest of works
(I'll work on that. However, atleast it functions!
10/04/18) */

let push = "";

const print = function () {
    let htmlStr = '';
    for (let i = 0; i < employeeList.length; i++) {
        htmlStr += `<div class ="entry" line-spacing="1.5"><p> ${employeeList[i].name}</p><p> ${employeeList[i].officeNum}</p><p> ${employeeList[i].phoneNum}</p> <br></div>`;
    }
    render(htmlStr);
}

/*add is FINALLY working also! :)*/

const add = function () {
    const userName = $('#name').val();
    const officeNum = $('#officeNum').val();
    const phoneNum = $('#phoneNum').val();
    employeeList.push({
        name: userName,
        officeNum: officeNum,
        phoneNum: phoneNum,
    })
}

//Verify Is Working
const verify = function () {
    const userName = $('#name').val();
    let htmlStr = 'Not Employed';
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === userName) {
            htmlStr = 'Confirmed';
        }
    }
    render(htmlStr);
}

//update is FINALLY working
const update = function () {
    const userName = $('#name').val();
    const officeNum = $('#officeNum').val();
    const phoneNum = $('#phoneNum').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === userName) {
            employeeList[i].officeNum = officeNum;
            employeeList[i].phoneNum = phoneNum;
        }
    }
    print();
}

//delete is working
const remove = function () {
    const userName = $('#name').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === userName) {
            employeeList.splice(i, 1);
        }
    }
    print();
}


//Some of us found these switch-cases online. They work really well!
const submit = function (e) {
    e.preventDefault();
    switch (push) {
        case 'add':
            add();
            break;
        case 'verify':
            verify();
            break;
        case 'update':
            update();
            break;
        case 'delete':
            remove();
            break;
    }
}
const viewBox = function () {
    $('#employees').empty();
    push = '';
    $('form').hide();
    print();
}

/* I can't figure out how to get the
form to show after I add an employee... :/ */
const addBtn = function () {
    $('#employees').empty();
    push = 'add';
    $('form').show();
    $('.extra-form').show();
}

const verifyBtn = function () {
    $('#employees').empty();
    push = 'verify';
    $('form').show();
    $('.extra-form').hide();
}

const deleteBtn = function () {
    $('#employees').empty();
    push = 'delete';
    $('form').show();
    $('.extra-form').hide();
}

const updateBtn = function () {
    $('#employees').empty();
    push = 'update';
    $('form').show();
    $('.extra-form').show();
}

const render = function (htmlStr) {
    $('#employees').html(htmlStr);
}

$('#view').on('click', viewBox);
$('#add').on('click', addBtn);
$('#verify').on('click', verifyBtn);
$('#update').on('click', updateBtn);
$('#delete').on('click', deleteBtn)
$('#submit').on('click', submit);