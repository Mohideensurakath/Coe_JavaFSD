import java.util.*;

public class Task5 {
    public static String reverseString(String str) {
        return new StringBuilder(str).reverse().toString();
    }

    public static int countOccurrences(String text, String sub) {
        int count = 0, index = 0;
        while ((index = text.indexOf(sub, index)) != -1) {
            count++;
            index += sub.length();
        }
        return count;
    }

    public static String splitAndCapitalize(String str) {
        String[] words = str.split(" ");
        StringBuilder result = new StringBuilder();
        for (String word : words) {
            if (!word.isEmpty()) {
                result.append(Character.toUpperCase(word.charAt(0))).append(word.substring(1)).append(" ");
            }
        }
        return result.toString().trim();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string to reverse: ");
        String input = scanner.nextLine();
        System.out.println("Reversed: " + reverseString(input));

        System.out.print("Enter text: ");
        String text = scanner.nextLine();
        System.out.print("Enter substring to count: ");
        String sub = scanner.nextLine();
        System.out.println("Occurrences: " + countOccurrences(text, sub));

        System.out.print("Enter a sentence to capitalize: ");
        String sentence = scanner.nextLine();
        System.out.println("Capitalized: " + splitAndCapitalize(sentence));

        scanner.close();
    }
}
