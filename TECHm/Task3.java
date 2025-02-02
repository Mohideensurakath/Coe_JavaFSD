import java.util.Scanner;

public class Task3 {
    public static void processInput() {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            try {
                System.out.print("Enter a number to calculate its reciprocal: ");
                double number = Double.parseDouble(scanner.nextLine());

                if (number == 0) {
                    throw new ArithmeticException("Reciprocal of zero is undefined.");
                }

                double reciprocal = 1 / number;
                System.out.println("Reciprocal: " + reciprocal);
                break;

            } catch (NumberFormatException e) {
                System.out.println("Invalid input! Please enter a valid number.");
            } catch (ArithmeticException e) {
                System.out.println("Error: " + e.getMessage());
            }
        }

        scanner.close();
    }

    public static void main(String[] args) {
        processInput();
    }
}
