function display(value)
{
    document.getElementById('textarea').value += value;
}

function calculate()
{
    var value = document.getElementById("textarea").value;
    var result = eval(value);
    document.getElementById("textarea").value = result;
}

function clr()
{
    document.getElementById("textarea").value ="";
}