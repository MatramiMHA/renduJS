fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
       //ici vous ecrivez votre code
      let titre = document.getElementById("titre");
      let h1 = document.createElement("h1");
      let h2 = document.createElement("h2");
      let bouton = document.createElement("button");

      h1.textContent = data.nomCommercial ;
      h2.textContent = data.phraseAccroche ;
      bouton.textContent = data.texteAppelAction ;

      

      titre.appendChild(h1);
      titre.appendChild(h2);
      titre.appendChild(bouton);

      let index = 0;
    data.avantagesClients.forEach(element => {
        let avantagesClients = document.getElementById("avantagesClients");
        let div = document.createElement("div");
        let p = document.createElement("p");

        
        p.textContent = element;
        index++;
       
        div.id="av"+index;
        
        console.log(p.id);
        avantagesClients.appendChild(div);
        avantagesClients.appendChild(p);


        
    });

    let av1 = document.getElementById("av1");
    av1.innerHTML= `<i class="fa-solid fa-puzzle-piece"></i>`;
    let av2 = document.getElementById("av2");
    av2.innerHTML= `<i class="fa-solid fa-lightbulb"></i>`;
    let av3 = document.getElementById("av3");
    av3.innerHTML= `<i class="fa-solid fa-droplet"></i>`;
    

    data.activites.forEach(element => {
    let section = document.getElementById("activites");   
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let p = document.createElement("p");
    div.className="card";   
    h2.textContent = element.nom;
    p.textContent = element.description;
   
     

    section.appendChild(div);
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(p);
    img.src =element["image-url"];
    


    });



    data.temoignages.forEach(element => {
        let section = document.getElementById("temoignages");   
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let note = document.createElement("p");
        
    
       
        h3.textContent = element.prenom;
        h4.textContent = element.typeExperience;
        p.textContent = element.commentaire;
        note.textContent ="Note : " + element.note;
         
    
        section.appendChild(div);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(note);
       
        
    
    
        });

    })
    .catch(error => console.error('Error:', error));
