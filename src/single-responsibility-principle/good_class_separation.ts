/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de aplicaciones interactivas
 * 
 * @author Diego Hernández Chico
 * @since 2 Mar 2025
 * CORREO: alu0101572062@ull.edu.es
 * Program to represent a right usage of the SRP. This is an example of a good 
 * class implementation. There are two classes with methods that iteract 
 * with each property.
 */

/**
 * Class dedicated to managing user-related operations.
 */
class UserDataManager {
  private userData: any;

  /**
   * Class constructor
   * 
   * @param userData 
   */
  constructor(userData: any) {
    this.userData = userData;
  }

  /**
   * Getter of the user name
   * 
   * @returns Name of the user
   */
  getUserName(): string {
    return this.userData.name;
  }

  /**
   * Method to update the email of the user
   * 
   * @param newEmail of the user
   */
  updateUserEmail(newEmail: string): void {
    this.userData.email = newEmail;
  }

  /**
   * Arbitrary calculation using userData
   * 
   * @returns User's score
   */
  calculateUserScore(): number {
    return this.userData.age * 2;
  }
}
  
/**
 * Class dedicated to managing system-related operations.
 */
class SystemDataManager {
  private systemData: any;
  
  /**
   * Class constructor
   * 
   * @param systemData
   */
  constructor(systemData: any) {
    this.systemData = systemData;
  }

  /**
   * Getter for the status of the system
   * 
   * @returns System's status
   */
  getSystemStatus(): string {
    return this.systemData.status;
  }

  /**
   * Changes the configuration of the system
   * 
   * @param newConfig 
   */
  updateSystemConfig(newConfig: any): void {
    this.systemData.config = newConfig;
  }
}
  
/**
 * Usage example:
 */
function mainGoodClassSeparation() {
  const userData = { name: "Alice", email: "alice@example.com", age: 30 };
  const systemData = { status: "operational", config: {} };
      
  const userManager = new UserDataManager(userData);
  console.log(userManager.getUserName());
  userManager.updateUserEmail("alice@newdomain.com");
    
  const systemManager = new SystemDataManager(systemData);
  console.log(systemManager.getSystemStatus());
}