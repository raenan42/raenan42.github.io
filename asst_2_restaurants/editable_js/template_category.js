/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories
 */

function orNotListed(value) {
  return value === '------' || value === 'N/A' || value === undefined ? 'Not listed' : value;
}

function showCategories(data) {

const groupedInspection = data.reduce((counts, item) => {
  if (!counts[item.city]) {
    counts[item.city] = [];
  }
counts[item.city].push(item);
return counts;
}, 
{}
);

const inspectionCounts = data.reduce((counts, item) => {
  if (item.inspection_results === "Compliant - No Health Risk") {
    counts[item.city] = (counts[item.city] || 0) +1;
  }
  return counts;
}, 
{}
);

const citySort = Object.entries(groupedInspection)
  .map(([city, item]) => `
  <div class = "category-section">
    <p class = "category-header">${city} .... ${item.length} establishments .... ${inspectionCounts[city] || 0} Compliant</p>
    <ul class = "category-items">${item.map(inspection => `
      <li class = "category-item"> <strong>${inspection.name}</strong> <br>
      ${inspection.address_line_1} <br>
      <div><u>Inspection Result</u>: ${orNotListed(inspection.inspection_results)}</div></li>`).join("")}
      </ul>
      </div>
      `)
  .join("");


  // Requirements:
  // - Group data by one meaningful field (category, city, inspection result, etc.)
  // - Show how many records are in each group, plus one other number per group
  //   (an average, a highest, a lowest)
  // - Show items within each group
  // - Make the groups easy to compare, and visually distinct from their items
  /*html*/
  return `
                <h2 class="view-title">📂 Category View</h2>
                ${citySort}
                <div class="todo-implementation">
                    <h3>TODO: Implement Category View</h3>
                    <p><strong>Your task:</strong> Group the data by categories to show relationships</p>
                    <p><strong>Good for:</strong> Understanding patterns, finding similar items, exploring by type</p>
                    <p><strong>Consider:</strong> Group by type of business? City? Inspection result? What tells the best story?</p>
                    <p><strong>Types of business in this data:</strong> ${[
                      ...new Set(data.map((item) => item.category)),
                    ].join(", ")}</p>
                </div>
            `;
}

export default showCategories;