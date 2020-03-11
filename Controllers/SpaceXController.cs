using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace SpaceXAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SpaceXController : Controller
    {
        HttpClient httpClient = new HttpClient();
        public SpaceXController()
        {
            httpClient.BaseAddress = new Uri("https://api.spacexdata.com/v3/");
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("content-type", "application/json");
        }
        [HttpGet]
        public async Task<JsonResult> PegarAll()
        {
            HttpResponseMessage resposta = await httpClient.GetAsync("capsules");
            var conteudo = await resposta.Content.ReadAsStringAsync();
            IEnumerable<Capsula> ObjetoCapsulas = JsonConvert.DeserializeObject<IEnumerable<Capsula>>(conteudo);

            var FormatCapsulas = JsonConvert.SerializeObject(ObjetoCapsulas, Formatting.Indented);

            return Json(FormatCapsulas);
        }
        [HttpGet]
        [Route("Future")]
        public async Task<JsonResult> PegarAllFuture()
        {
            HttpResponseMessage resposta = await httpClient.GetAsync("capsules/upcoming");
            var conteudo = await resposta.Content.ReadAsStringAsync();
            IEnumerable<Capsula> ObjetoCapsulas = JsonConvert.DeserializeObject<IEnumerable<Capsula>>(conteudo);

            var FormatCapsulas = JsonConvert.SerializeObject(ObjetoCapsulas, Formatting.Indented);

            return Json(FormatCapsulas);
        }
        [HttpGet]
        [Route("Past")]
        public async Task<JsonResult> PegarAllPast()
        {
            HttpResponseMessage resposta = await httpClient.GetAsync("capsules/past");
            var conteudo = await resposta.Content.ReadAsStringAsync();
            IEnumerable<Capsula> ObjetoCapsulas = JsonConvert.DeserializeObject<IEnumerable<Capsula>>(conteudo);

            var FormatCapsulas = JsonConvert.SerializeObject(ObjetoCapsulas, Formatting.Indented);

            return Json(FormatCapsulas);
        }
        [HttpGet]
        [Route("Next")]
        public async Task<JsonResult> PegarNext()
        {
            HttpResponseMessage resposta = await httpClient.GetAsync("capsules/upcoming");
            var conteudo = await resposta.Content.ReadAsStringAsync();
            IEnumerable<Capsula> ObjetoCapsulas = JsonConvert.DeserializeObject<IEnumerable<Capsula>>(conteudo);

            Capsula ProximaCapsula = ObjetoCapsulas.OrderBy(x => x.DataLancamento).FirstOrDefault();
            var FormatCapsulas = JsonConvert.SerializeObject(ProximaCapsula, Formatting.Indented);

            return Json(FormatCapsulas);
        }
        [HttpGet]
        [Route("Last")]
        public async Task<JsonResult> PegarLast()
        {
            HttpResponseMessage resposta = await httpClient.GetAsync("capsules/past");
            var conteudo = await resposta.Content.ReadAsStringAsync();
            IEnumerable<Capsula> ObjetoCapsulas = JsonConvert.DeserializeObject<IEnumerable<Capsula>>(conteudo);

            Capsula UltimaCapsula = ObjetoCapsulas.OrderBy(x => x.DataLancamento).FirstOrDefault();
            var FormatCapsulas = JsonConvert.SerializeObject(UltimaCapsula, Formatting.Indented);

            return Json(FormatCapsulas);
        }
    }
}