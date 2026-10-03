// cette classe fait un rapport 
public class ReportGenerator { 
    // affiche un rapport de notes 
    public void generateReport(String title, int[] scores) { //prendre un titre et un tableau d'entiers en parametre
        System.out.println("=== " + title + " ==="); //Afficher le titre du rapport
        System.out.println("Nombre de notes : " + scores.length); //Afficher le nombre de notes dans le tableau
        double avg = MathUtils.average(scores); //Appeler la methode average de la classe MathUtils pour calculer la moyenne des notes
        System.out.println("Moyenne : " + avg);//Afficher la moyenne des notes
        if (avg >= 10) { //Si la moyenne est superieure ou egale a 10, afficher "Resultat : OK", sinon afficher" "Resultation : A ameliorer"
            System.out.println("Résultat : OK"); //Afficher le resultat du rapport
        } else { 
            System.out.println("Résultat : À améliorer"); //Afficher le resultat du rapport
        } 
        System.out.println("-------------------------"); //Afficher des lignes de separation pour le rapport
    } 
} 