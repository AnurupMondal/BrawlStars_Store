function darkMode(e)
{
    e.classList.toggle("dark");

    let elements = document.querySelectorAll("*");

    for (let i = 0; i < elements.length; i++)
    {
        elements[i].classList.toggle("dark-mode") 
    }
}