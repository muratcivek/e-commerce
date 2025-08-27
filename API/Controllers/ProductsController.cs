using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")] //api/products
public class ProductsController : ControllerBase
{
    private readonly DataContext _context;
    public ProductsController(DataContext context)
    {
        _context = context;
    }


    [HttpGet]
    public async Task<ActionResult> GetProducts()
    {
        var products = await _context.Products.ToListAsync();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult> GetProductById(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }
        var products = await _context.Products.FirstOrDefaultAsync(i => i.Id == id);
        if (products == null)
        {
            return NotFound();
        }
        return Ok(products);
    }
}