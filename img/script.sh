#!/bin/bash

# Parcourir tous les fichiers du répertoire courant
for file in *-min*; do
    # Vérifier si le fichier contient '-min'
    if [[ -f "$file" ]]; then
        # Remplacer '-min' par une chaîne vide dans le nom de fichier
        new_file="${file//-min/}"
        
        # Renommer le fichier
        mv "$file" "$new_file"
        echo "Renommé : $file -> $new_file"
    fi
done

echo "Tous les fichiers ont été renommés."
