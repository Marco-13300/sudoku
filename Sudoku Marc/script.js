const grilleElt = document.getElementById("jeu");

const banquesDeGrilles = [
    {
        depart: [
            [0, 6, 0, 7, 0, 8, 1, 0, 2],
            [7, 8, 0, 0, 0, 9, 0, 3, 6],
            [2, 9, 0, 6, 5, 0, 0, 0, 8],
            [0, 0, 3, 9, 0, 4, 8, 5, 7],
            [0, 7, 9, 5, 2, 0, 3, 6, 0],
            [4, 0, 6, 0, 0, 7, 0, 0, 0],
            [9, 4, 0, 1, 7, 5, 6, 2, 0],
            [6, 0, 0, 0, 0, 0, 0, 0, 0],
            [5, 3, 0, 4, 0, 6, 7, 8, 1]
        ],
        solution: [
            [3, 6, 5, 7, 4, 8, 1, 9, 2],
            [7, 8, 4, 2, 1, 9, 5, 3, 6],
            [2, 9, 1, 6, 5, 3, 4, 7, 8],
            [1, 2, 3, 9, 6, 4, 8, 5, 7],
            [8, 7, 9, 5, 2, 1, 3, 6, 4],
            [4, 5, 6, 3, 8, 7, 2, 1, 9],
            [9, 4, 8, 1, 7, 5, 6, 2, 3],
            [6, 1, 7, 8, 3, 2, 9, 4, 5],
            [5, 3, 2, 4, 9, 6, 7, 8, 1]
        ]
    },
    {
        depart: [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ],
        solution: [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ]
    }
];

let indexGrille = 0;

function dessinerLaGrille() {
    grilleElt.innerHTML = "";
    let actuelle = banquesDeGrilles[indexGrille];

    for (let l = 0; l < 10; l++) {
        for (let c = 0; c < 10; c++) {
            const divCase = document.createElement("div");
            divCase.classList.add("case");

            if (l === 0 && c === 0) {
                divCase.classList.add("coordonnee");
            } else if (l === 0) {
                divCase.classList.add("coordonnee");
                divCase.textContent = String.fromCharCode(64 + c);
            } else if (c === 0) {
                divCase.classList.add("coordonnee");
                divCase.textContent = l;
            } else {
                const champ = document.createElement("input");
                champ.type = "number";
                
                let val = actuelle.depart[l-1][c-1];
                if (val !== 0) {
                    champ.value = val;
                    champ.classList.add("fixe");
                    champ.readOnly = true;
                }

                divCase.classList.add("b-haut", "b-gauche");
                if (c === 3 || c === 6) divCase.classList.add("b-droit-epais");
                if (l === 3 || l === 6) divCase.classList.add("b-bas-epais");
                if (c === 9) divCase.classList.add("b-droit");
                if (l === 9) divCase.classList.add("b-bas");

                divCase.appendChild(champ);
            }
            grilleElt.appendChild(divCase);
        }
    }
}

function verifier() {
    const inputs = document.querySelectorAll("#jeu input");
    let i = 0;
    let actuelle = banquesDeGrilles[indexGrille];

    for (let l = 0; l < 9; l++) {
        for (let c = 0; c < 9; c++) {
            const champ = inputs[i];
            if (!champ.classList.contains("fixe") && champ.value !== "") {
                if (parseInt(champ.value) === actuelle.solution[l][c]) {
                    champ.style.backgroundColor = "#d4edda";
                } else {
                    champ.style.backgroundColor = "#f8d7da";
                }
            }
            i++;
        }
    }
}

function nouvelleGrille() {
    indexGrille = (indexGrille + 1) % banquesDeGrilles.length;
    dessinerLaGrille();
}

dessinerLaGrille();