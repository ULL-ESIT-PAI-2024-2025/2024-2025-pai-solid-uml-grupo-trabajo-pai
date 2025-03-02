/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de aplicaciones interactivas
 * 
 * @author Diego Hernández Chico
 * @since 2 Mar 2025
 * CORREO: alu0101572062@ull.edu.es
 * Program to represent a bad usage of the SRP. This is an example of a bad 
 * class implementation. There are two obvious groups of methods that iteract 
 * with each property.
 */

/**
 * Class to manage information about a user and the system
 */
class DataManager {
  userData: any;
  systemData: any;
  
  /**
   * Class constructor
   * 
   * @param userData 
   * @param systemData 
   */
  constructor(userData: any, systemData: any) {
    this.userData = userData;
    this.systemData = systemData;
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