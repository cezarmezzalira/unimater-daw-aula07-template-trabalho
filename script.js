divExperiencias = document.querySelector("#experiences")

console.log(divExperiencias)
experiencias = [
    {
        "empresa": "Viasoft",
        "cargo": " Full Stack Developer",
        "descricao": "Within Viasoft, I made a transition in my role to become a full-stack developer, where I work with a wide range of technologies, including Java, Spring Boot, Angular, TypeScript, Android Native, and Flutter.",
        "data" : "01/07/2023 - at the moment"
    },
    {
        "empresa": "Viasoft",
        "cargo": "QA",
        "descricao": "I worked as a testing analyst at Viasoft, in the agricultural system's accounting area, for a period of 7 months. During that time, I frequently took on the role of a QA and requirements analyst, extensively working on the creation and execution of queries necessary for code development.",
        "data" : "02/01/2023 - 01/07/2023"
    },
    {
        "empresa": "Unimed - Pato Branco - PR",
        "cargo": "Young Apprentice Infrastructure Analyst.",
        "descricao": "For a period of nearly a year, I held the position of infrastructure support, with responsibilities focused on the maintenance of machines and networks at Unimed Pato Branco.",
        "data" : "01/03/2022 - 30/12/2023"
    },
]

function createDivExperiencia(divPai, experiencia){
    divExperience = document.createElement("div")
    divExperience.setAttribute("class", "experience")

    empresa = document.createElement("h2")
    empresa.setAttribute("class", "empresa")
    empresa.style.paddingLeft = "25px";
    empresa.innerText = experiencia.empresa

    cargo = document.createElement("h4")
    cargo.setAttribute("class", "cargo")
    cargo.style.paddingLeft = "25px";
    cargo.innerText = experiencia.cargo

    descricao = document.createElement("p")
    descricao.setAttribute("class", "descricao")
    descricao.style.paddingLeft = "25px";
    descricao.innerText = experiencia.descricao

    data = document.createElement("p")
    data.setAttribute("class", "descricao")
    data.style.paddingLeft = "25px";
    data.style.fontWeight = "bold";
    data.innerText = experiencia.data

    divExperience.appendChild(empresa)
    divExperiencias.appendChild(divExperience)

    divExperience.appendChild(cargo)
    divExperiencias.appendChild(divExperience)

    divExperience.appendChild(descricao)
    divPai.appendChild(divExperience)

    divExperience.appendChild(data)
    divPai.appendChild(divExperience)

    const hr = document.createElement("hr");
    hr.style.borderColor = "black";
    hr.style.display = "flex";
    hr.style.justifyContent = "center";
    hr.style.alignItems = "center";
    hr.style.flexDirection = "column";
    hr.style.height = "0"; 
    hr.style.width = "95%";
    hr.style.marginLeft = "26px";
    divPai.appendChild(hr);

}

for (let experiencia of experiencias){
    createDivExperiencia(divExperiencias, experiencia)
}
