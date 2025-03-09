/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 * 
 * @see {@link https://en.wikipedia.org/wiki/Dependency_inversion_principle}
*/

// Abstracción: Interfaz para procesar pagos
interface IPaymentGateway {
  processPayment(amount: number): boolean;
}

// Implementación con PayPal
class PayPalGateway implements IPaymentGateway {
  processPayment(amount: number): boolean {
    console.log(`Procesando $${amount} con PayPal...`);
    // Lógica real de PayPal
    return true;
  }
}

// Implementación con Stripe
class StripeGateway implements IPaymentGateway {
  processPayment(amount: number): boolean {
    console.log(`Procesando $${amount} con Stripe...`);
    // Lógica real de Stripe
    return true;
  }
}

// Clase de alto nivel que no depende de implementaciones concretas
class PaymentProcessor {
  private paymentGateway: IPaymentGateway;

  constructor(paymentGateway: IPaymentGateway) {
    this.paymentGateway = paymentGateway;
  }

  executePayment(amount: number): boolean {
    return this.paymentGateway.processPayment(amount);
  }
}

// Uso con PayPal
const paypal = new PayPalGateway();
const processorPayPal = new PaymentProcessor(paypal);
processorPayPal.executePayment(100); // "Procesando $100 con PayPal..."

// Uso con Stripe
const stripe = new StripeGateway();
const processorStripe = new PaymentProcessor(stripe);
processorStripe.executePayment(200); // "Procesando $200 con Stripe..."

/* Nueva implementación sin romper el sistema */

// Nueva pasarela: Bitcoin
class CryptoGateway implements IPaymentGateway {
  processPayment(amount: number): boolean {
    console.log(`Procesando $${amount} con Bitcoin...`);
    return true;
  }
}

// Uso con Bitcoin
const bitcoin = new CryptoGateway();
const processorBitcoin = new PaymentProcessor(bitcoin);
processorBitcoin.executePayment(300); // "Procesando $300 con Bitcoin..."