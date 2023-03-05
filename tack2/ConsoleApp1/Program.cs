using System.Diagnostics.Metrics;
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Başlanğıcda boş bir array-iniz olsun və layihəni run etdikdə sizdə enter new employee istəsin.
             Hər dəfə add etdikdən sonra do you want to continue soruşsun və əgər yes daxil etsəniz yeni employee-ni əlavə edin və nə vaxt ki,
             no daxil etsəniz o zaman layihəni dayandırıb employee - ləri console - a versin.*/

            string[] employees = new string[0]; // bos array yaratdiq

            bool addEmployee = true;

            while (addEmployee)
            {
                Console.WriteLine("enter new employee");
                string employeeName = Console.ReadLine();

                Array.Resize(ref  employees, employees.Length+1); // array'i bir vahid boyudur
                employees[employees.Length - 1] = employeeName; // yeni isci elave edir
                Console.WriteLine("do you want to continue");
                string answer= Console.ReadLine().ToLower(); 
                
                if(answer == "no")
                {
                    addEmployee = false;
                    string result= string.Join(",", employees); //array'deki elementleri yan-yana tek setirde yazir
                    Console.WriteLine( result );
                }

            }
        }
    }
}