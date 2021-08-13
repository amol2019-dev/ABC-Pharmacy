using ABC_Pharmacy.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ABC_Pharmacy.Services
{
    public interface IMedicinesService
    {
        List<Medicines> GetAllMedicine();
        Medicines GetMedicineById(int medicineId);
        bool AddMedicine(Medicines medicine);
        public bool UpdateNotes(Medicines medicine);
    }

    public class MedicinesService : IMedicinesService
    {
        IWebHostEnvironment _environment;
        private readonly string _path = string.Empty;
        public MedicinesService(IWebHostEnvironment environment)
        {
            _environment = environment;
            _path = _environment.WebRootPath + "\\medicines.json";
        }
        public List<Medicines> GetAllMedicine()
        {
            var data = System.IO.File.ReadAllText(_path);
            return JsonConvert.DeserializeObject<List<Medicines>>(data);            
        }

        public Medicines GetMedicineById(int medicineId)
        {
           var result= GetAllMedicine();
            return result.FirstOrDefault(x => x.Id == medicineId);
        }

        public bool AddMedicine(Medicines medicine)
        {
            var result = GetAllMedicine();
            medicine.Id = result.Count == 0 ? 1 : result.Max(x => x.Id).Value + 1;

            result.Add(medicine);
            System.IO.File.WriteAllText(_path, JsonConvert.SerializeObject(result));
            return true;
        }

        public bool UpdateNotes(Medicines medicine)
        {
            var result = GetAllMedicine();
            var medicineObj = result.FirstOrDefault(x => x.Id == medicine.Id);

            if (medicineObj != null)
            {
                medicineObj.Notes = medicine.Notes;
            }

            System.IO.File.WriteAllText(_path, JsonConvert.SerializeObject(result));
            return true;
        }
    }
}
