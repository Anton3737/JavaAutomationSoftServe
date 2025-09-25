import org.dataloader.impl.Assertions;
import org.testng.annotations.Test;
import com.*;
import org.testng.asserts.Assertion;


public class CalcTest {
    @Test
    public void checkAdd1() {
        Calc calc = new Calc();
        double expected;
        double actual;
        expected = 10.001;
        actual = calc.add(4,6);
//        Assertions.assertEquals(expected, actual ,)

    }
}
