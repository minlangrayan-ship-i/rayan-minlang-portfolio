public class MathUtils { 
    // additionne deux nombres 
    public static int add(int a, int b) { //prendre deux entiers en parametre et retourner leur somme
        return a + b; //retourner la somme des deux entiers entre en parametre
    } 
 
    // multiplie deux nombres 
    public static int multiply(int x, int y) { //prendre deux entiers en parametre et retourner leur produit
        return x * y; //retourner le produit des deux entiers entre en parametre
    } 
 
    // calcule une moyenne bizarre 
    public static double average(int[] values) { //prendre un tableau d'entiers en parametre et retourner la moyenne de ces entiers
        int sum = 0; //declarer une variable somme et l'initialiser a 0
        for (int i = 0; i < values.length; i++) { //parcourir le tableau d'entiers
            sum = sum + values[i]; //recupperer la somme des entiers du tableau et les stoker dans la variable somme
        } 
        // on fait la moyenne 
        return (double) sum / values.length; //retourner la moyenne des entiers du tableau
    } 
} 