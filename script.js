$(document).ready(function() {
  // Fonction pour gérer la soumission du formulaire d'inscription
  $('#inscriptionForm').submit(function(e) {
    e.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs des champs du formulaire
    var numero = $('#numero').val();
    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var age = $('#age').val();
    var sexe = $('#sexe').val();
    var num = $('#num').val();
    var adresse = $('#adresse').val();
    var situation = $('#situation').val();
    var antecedent = $('#antecedent').val();
    var groupe = $('#groupe').val();
    var vacci = $('#vacci').val();
    var observation = $('#observation').val();

    // Vérifier si les champs sont vides
    if (!numero || !nom || !prenom || !age || !sexe || !num || !adresse || !situation || !antecedent || !groupe || !vacci || !observation) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Créer un objet contenant les données de l'inscription
    var inscriptionData = {
      numero: numero,
      nom: nom,
      prenom: prenom,
      age: age,
      sexe: sexe,
      num: num,
      adresse: adresse,
      situation: situation,
      antecedent: antecedent,
      groupe: groupe,
      vacci: vacci,
      observation: observation
    };

    // Ajouter les données de l'inscription au tableau des inscriptions
    ajouterInscription(inscriptionData);

    // Réinitialiser le formulaire
    $('#inscriptionForm')[0].reset();
  });

  // Fonction pour ajouter les données de l'inscription au tableau
  function ajouterInscription(inscriptionData) {
    // Créer une nouvelle ligne pour l'inscription dans le tableau
    var row = $('<tr>');
    row.append($('<td>').text(inscriptionData.numero));
    row.append($('<td>').text(inscriptionData.nom));
    row.append($('<td>').text(inscriptionData.prenom));
    row.append($('<td>').text(inscriptionData.age));
    row.append($('<td>').text(inscriptionData.sexe));
    row.append($('<td>').text(inscriptionData.num));
    row.append($('<td>').text(inscriptionData.adresse));
    row.append($('<td>').text(inscriptionData.situation));
    row.append($('<td>').text(inscriptionData.antecedent));
    row.append($('<td>').text(inscriptionData.groupe));
    row.append($('<td>').text(inscriptionData.vacci));
    row.append($('<td>').text(inscriptionData.observation));

    // Ajouter la nouvelle ligne au tableau des inscriptions
    $('#inscriptionTable tbody').append(row);
  }

  // Fonction pour exporter le tableau des inscriptions au format Excel
  $('#exportToExcel').click(function() {
    // Créer un objet WorkBook contenant les données du tableau
    var wb = XLSX.utils.table_to_book(document.getElementById('inscriptionTable'), { sheet: 'Inscriptions' });

    // Générer le fichier Excel et le télécharger
    XLSX.writeFile(wb, 'inscriptions.xlsx');
  });

  // Fonction pour effacer les champs du formulaire
  $('#effacerChamps').click(function() {
    $('#inscriptionForm')[0].reset();
  });

  // Fonction pour effectuer une recherche dans le tableau des inscriptions
  $('#searchButton').click(function() {
    var searchValue = $('#searchInput').val().toLowerCase();

    // Parcourir toutes les lignes du tableau
    $('#inscriptionTable tbody tr').each(function() {
      var rowText = $(this).text().toLowerCase();

      // Cacher les lignes qui ne correspondent pas à la recherche
      if (rowText.indexOf(searchValue) === -1) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
});


