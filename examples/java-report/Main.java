/**
 * bulletin de notes
 */
public class Main { 
    public static void main(String[] args) { 
        int[] notesMaths = {12, 9, 15, 8}; /*Initialisation des notes en mathematiques */
        int[] notesInfo = {18, 14, 16}; /*Initialisation du tableau de notes d'informatique */
        ReportGenerator generator = new ReportGenerator(); 
        generator.generateReport("Bulletin Maths", notesMaths); 
        generator.generateReport("Bulletin Informatique", notesInfo); 
    } 
} 