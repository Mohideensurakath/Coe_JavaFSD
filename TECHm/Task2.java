import java.util.Scanner;

class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public synchronized void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(Thread.currentThread().getName() + " deposited: ₹" + amount);
            System.out.println("Updated Balance: ₹" + balance);
        }
    }

    public synchronized void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + " withdrew: ₹" + amount);
            System.out.println("Updated Balance: ₹" + balance);
        } else {
            System.out.println(Thread.currentThread().getName() + " attempted to withdraw ₹" + amount + " - Insufficient funds!");
        }
    }

    public double getBalance() {
        return balance;
    }
}

class BankingThread extends Thread {
    private final BankAccount account;
    private final boolean isDeposit;
    private final double amount;

    public BankingThread(BankAccount account, boolean isDeposit, double amount) {
        this.account = account;
        this.isDeposit = isDeposit;
        this.amount = amount;
    }

    @Override
    public void run() {
        if (isDeposit) {
            account.deposit(amount);
        } else {
            account.withdraw(amount);
        }
    }
}

public class Task2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter initial account balance in ₹: ");
        double initialBalance = scanner.nextDouble();
        BankAccount account = new BankAccount(initialBalance);

        System.out.print("Enter number of transactions: ");
        int numTransactions = scanner.nextInt();
        scanner.nextLine();  

        Thread[] threads = new Thread[numTransactions];

        for (int i = 0; i < numTransactions; i++) {
            System.out.print("Enter transaction (deposit/withdraw) and amount in ₹: ");
            String[] input = scanner.nextLine().split(" ");
            String type = input[0];
            double amount = Double.parseDouble(input[1]);

            boolean isDeposit = type.equalsIgnoreCase("deposit");
            threads[i] = new BankingThread(account, isDeposit, amount);
        }

        for (Thread thread : threads) {
            thread.start();
        }

        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("Final Balance: ₹" + account.getBalance());
        scanner.close();
    }
}
