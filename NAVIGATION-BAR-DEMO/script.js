var navstatus = 0;
function openNav()
{
    if(!navstatus)
    {
        $(`.maindiv`).css(`width` , `100%`)
        $(`a`).css(`display` , `block`)
        navstatus=1
    }
    else
    {
        $(`.maindiv`).css(`width` , `0`)
        $(`a`).css(`display` , `none`)
        navstatus=0
    }
}