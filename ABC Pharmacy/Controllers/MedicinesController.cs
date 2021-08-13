using ABC_Pharmacy.Models;
using ABC_Pharmacy.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ABC_Pharmacy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicinesController : ControllerBase
    {
        IMedicinesService _medicinesService;
        ILogger<MedicinesController> _logger;
        public MedicinesController(IMedicinesService medicinesService, ILogger<MedicinesController> logger)
        {
            _medicinesService = medicinesService;
            _logger = logger;
        }

        [HttpGet("[action]")]
        public List<Medicines> GetAllMedicines()
        {
            try
            {
                return _medicinesService.GetAllMedicine();
            }
            catch (Exception ex)
            {
                _logger.LogError($"EXCEPTION in GetAllMedicines(): {ex}");
                return new List<Medicines>();
            }
        }

        [HttpGet("[action]")]
        public Medicines GetMedicineById(int medicineId)
        {
            try
            {
                return _medicinesService.GetMedicineById(medicineId);
            }
            catch (Exception ex)
            {
                _logger.LogError($"EXCEPTION in GetMedicineById({medicineId}): {ex}");
                return null;
            }
        }

        [HttpPost("[action]")]
        public bool AddMedicine([FromBody] Medicines medicine)
        {
            try
            {
                return _medicinesService.AddMedicine(medicine);
            }
            catch (Exception ex)
            {
                _logger.LogError($"EXCEPTION in AddMedicine(): {ex}");
                return false;
            }
        }

        [HttpPost("[action]")]
        public bool UpdateNotes([FromBody] Medicines medicine)
        {
            try
            {
                return _medicinesService.UpdateNotes(medicine);
            }
            catch (Exception ex)
            {
                _logger.LogError($"EXCEPTION in UpdateNotes(): {ex}");
                return false;
            }
        }

    }
}