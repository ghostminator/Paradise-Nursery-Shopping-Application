import Header from "@/components/Header";
import PlantCard from "@/components/PlantCard";
import { plants } from "@/data/plants";

const Products = () => {
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Our Plants Collection</h2>
          <p className="mt-2 text-muted-foreground">Browse our selection of beautiful houseplants</p>
        </div>

        {categories.map((category) => {
          const categoryPlants = plants.filter(plant => plant.category === category);
          return (
            <section key={category} className="mb-12">
              <h3 className="mb-6 text-2xl font-semibold text-foreground">{category}</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryPlants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default Products;
