import java.util.*;

class MatrixMultiplier extends Thread {
    private final int[][] result;
    private final int[][] matrixA;
    private final int[][] matrixB;
    private final int row;

    public MatrixMultiplier(int[][] result, int[][] matrixA, int[][] matrixB, int row) {
        this.result = result;
        this.matrixA = matrixA;
        this.matrixB = matrixB;
        this.row = row;
    }

    @Override
    public void run() {
        int colsB = matrixB[0].length;
        int colsA = matrixA[0].length;

        for (int j = 0; j < colsB; j++) {
            for (int k = 0; k < colsA; k++) {
                result[row][j] += matrixA[row][k] * matrixB[k][j];
            }
        }
    }
}

public class Task10 {
    public static int[][] multiplyMatrices(int[][] matrixA, int[][] matrixB) {
        int rowsA = matrixA.length;
        int colsA = matrixA[0].length;
        int colsB = matrixB[0].length;

        int[][] result = new int[rowsA][colsB];
        Thread[] threads = new Thread[rowsA];

        for (int i = 0; i < rowsA; i++) {
            threads[i] = new MatrixMultiplier(result, matrixA, matrixB, i);
            threads[i].start();
        }

        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter rows and columns for Matrix A: ");
        int rowsA = scanner.nextInt();
        int colsA = scanner.nextInt();
        int[][] matrixA = new int[rowsA][colsA];
        System.out.println("Enter Matrix A:");
        for (int i = 0; i < rowsA; i++)
            for (int j = 0; j < colsA; j++)
                matrixA[i][j] = scanner.nextInt();

        System.out.print("Enter columns for Matrix B: ");
        int colsB = scanner.nextInt();
        int[][] matrixB = new int[colsA][colsB];
        System.out.println("Enter Matrix B:");
        for (int i = 0; i < colsA; i++)
            for (int j = 0; j < colsB; j++)
                matrixB[i][j] = scanner.nextInt();

        int[][] result = multiplyMatrices(matrixA, matrixB);

        System.out.println("Result of multiplication:");
        for (int[] row : result)
            System.out.println(Arrays.toString(row));

        scanner.close();
    }
}
