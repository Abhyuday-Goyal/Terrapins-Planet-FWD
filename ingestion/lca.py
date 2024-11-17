import requests
import time
from typing import Dict, Union, Any
import os
from dotenv import load_dotenv

load_dotenv()
plt_key = os.getenv('PLT_FWD_KEY')

def generate_lca(name: str, weight: float, unit: str = "kg", api_key=plt_key) -> Dict[str, Any]:
    """
    Generate a Life Cycle Assessment (LCA) for a given product.
    
    Args:
        name: Name of the product
        weight: Weight of the product
        unit: Unit of measurement (default: "kg")
        api_key: PlanetFWD API key
    
    Returns:
        Dictionary containing the LCA results
    
    Raises:
        ValueError: If the API key is missing
        requests.RequestException: If the API request fails
    """
    if not api_key:
        raise ValueError("API key is required")
    
    base_url = "https://app.planetfwd.com/api/lca"
    headers = {
        "accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": api_key
    }
    
    # Initial LCA generation request
    request_body = {
        "name": name,
        "mass": {
            "amount": weight,
            "unit": unit
        },
        "description": f"LCA analysis for {name}"
    }
    
    try:
        # Generate LCA
        response = requests.post(f"{base_url}/generate", 
                               json=request_body, 
                               headers=headers)
        response.raise_for_status()
        
        lca_id = response.json().get('id')
        if not lca_id:
            raise ValueError("No LCA ID received in response")
            
        # Poll for completion
        status_url = f"{base_url}/{lca_id}/generation_status"
        while True:
            status_response = requests.get(status_url, headers=headers)
            status_response.raise_for_status()
            
            status_data = status_response.json()
            if status_data.get('complete'):
                return status_data.get('emissionFactor')
                
            # Wait before polling again
            time.sleep(2)
            
    except requests.RequestException as e:
        print(f"API request failed: {str(e)}")
        raise
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        raise

if __name__ == "__main__":
    # Example usage
    lca_results = generate_lca("T-shirt", 0.2)
    print(lca_results)