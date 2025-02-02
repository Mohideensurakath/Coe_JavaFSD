import java.util.*;

public class Task7 {
    public static List<Integer> findAnagrams(String s, String p) {
        List<Integer> result = new ArrayList<>();
        if (s.length() < p.length()) return result;

        int[] pCount = new int[26];
        int[] sCount = new int[26];

        for (char c : p.toCharArray()) pCount[c - 'a']++;

        int pLen = p.length();
        for (int i = 0; i < s.length(); i++) {
            sCount[s.charAt(i) - 'a']++;

            if (i >= pLen) {
                sCount[s.charAt(i - pLen) - 'a']--;
            }

            if (Arrays.equals(pCount, sCount)) {
                result.add(i - pLen + 1);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter string s: ");
        String s = scanner.nextLine();
        System.out.print("Enter string p: ");
        String p = scanner.nextLine();

        System.out.println("Starting indices of anagrams: " + findAnagrams(s, p));

        scanner.close();
    }
}
