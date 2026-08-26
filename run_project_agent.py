import os
import asyncio
from google.antigravity import LocalAgentConfig
from google.antigravity.utils.interactive import run_interactive_loop

async def main():
    # Détermination du chemin du projet
    project_root = os.path.dirname(os.path.abspath(__file__))
    skills_dir = os.path.join(project_root, ".agents", "skills")
    gemini_md_path = os.path.join(project_root, "GEMINI.md")
    
    # Instructions système basées sur le fichier GEMINI.md
    system_instructions = (
        "Tu es un agent de suivi de projet (Project Tracker). Ton rôle est d'aider à gérer et suivre "
        "le développement du projet en te basant sur les règles et compétences (skills) chargées.\n\n"
    )
    if os.path.exists(gemini_md_path):
        with open(gemini_md_path, "r", encoding="utf-8") as f:
            system_instructions += "Voici les règles de développement globales du projet à respecter :\n\n" + f.read()

    # Configuration de l'agent avec chargement des compétences locales
    config = LocalAgentConfig(
        system_instructions=system_instructions,
        skills_paths=[skills_dir] if os.path.exists(skills_dir) else [],
    )

    print("=== Lancement de l'agent de suivi de projet ===")
    print(f"Règles chargées depuis : {gemini_md_path}")
    print(f"Compétences chargées depuis : {skills_dir}")
    print("Tapez 'exit' ou 'quit' pour quitter.")
    print("==============================================")
    
    await run_interactive_loop(config)

if __name__ == "__main__":
    asyncio.run(main())
