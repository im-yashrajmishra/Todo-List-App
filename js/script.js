function changeTheme(){
    const element1 = document.querySelector(".mContainer:nth-of-type(1) > div:nth-of-type(2)");
    const element2 = document.querySelector(".mContainer:nth-of-type(1) > div:nth-of-type(2) > div");
    if(element2.style.left=="3px")
    {
        element2.style.left="27px";
        element1.style.backgroundColor = "rgb(0, 150, 250)";
        document.querySelector(":root").style.setProperty("--var6", "rgb(255, 200, 120)");
    }
    else
    {
        element2.style.left="3px";
        element1.style.backgroundColor = "rgb(0, 0, 100)";
        document.querySelector(":root").style.setProperty("--var6", "rgb(100, 100, 100)");
    }
}
let c=0;
function addTask(){
    const element = document.getElementsByName("newTask")[0];
    if((element.value==null)||(element.value==""))
    {
        const tempElement = document.getElementsByClassName("mContainer")[1].children[1];
        tempElement.style.display = "block";
    }
    else
    {
        let tempElement = document.getElementsByClassName("mContainer")[1].children[1];
        tempElement.style.display = "none";
        tempElement = document.getElementsByClassName("mContainer")[3];
        const str=`<div class="mBox flexSpaceBetween" id="mBox${c}">
                        <div class="checkBox flexCenter" onclick="taskComplete('mBox${c}')">
                            <div></div>
                        </div>
                        <p class="mtext3 darkblue">${element.value}</p>
                        <img src="images/editTask.png" alt="" onclick="editElement('mBox${c}')">
                        <img src="images/delete.png" alt="" onclick="deleteElement('mBox${c}')">
                    </div>`;
        tempElement.insertAdjacentHTML("beforeend", str);
        c++;
        element.value="";
    }
}
function taskComplete(s){
    const element = document.getElementById(`${s}`);
    let tempElement = element.children[0];
    tempElement.children[0].style.display = "block";
    tempElement = element.children[1];
    tempElement.style.textDecoration = "line-through";
}
function editElement(s){
    const element = document.getElementById(`${s}`);
    const elementParent = element.parentElement;
    const str = element.children[1].textContent.trim();
    elementParent.removeChild(element);
    const tempElement = document.getElementsByName("newTask")[0];
    tempElement.value = `${str}`;
}
function deleteElement(s){
    const element = document.getElementById(`${s}`);
    const elementParent = element.parentElement;
    elementParent.removeChild(element);
}
function showAllTask()
{
    const elementArray = document.getElementsByClassName("mBox");
    for(const i of elementArray)
    {
        i.style.display = "flex";
    }
}
function completedTask()
{
    const elementArray = document.getElementsByClassName("mBox");
    for(const i of elementArray)
    {
        if(i.children[0].children[0].style.display != "block")
        {
            i.style.display = "none";
        }
        else
        {
            i.style.display = "flex";
        }
    }
}
function incompleteTask()
{
    const elementArray = document.getElementsByClassName("mBox");
    for(const i of elementArray)
    {
        if(i.children[0].children[0].style.display == "block")
        {
            i.style.display = "none";
        }
        else
        {
            i.style.display = "flex";
        }
    }
}
function deleteAllTask()
{
    const elementArray = document.getElementsByClassName("mBox");
    for(let i of Object.values(elementArray))
    {
        document.getElementsByClassName("mContainer")[3].removeChild(i);
    }
}