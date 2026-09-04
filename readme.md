# PLUG

Site web de **PLUG** — location de powerbanks dans les bars de Gatineau–Ottawa.

**Design final :** direction arrondie (guide v2) — prise arrondie, cyan d'action, magenta d'alerte.

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil / landing |
| `bornes.html` | Liste des bornes + filtres |
| `partenaires.html` | Pitch partenaires + formulaire |
| `mentions.html` | Mentions & confidentialité |
| `brand/` | Guides de marque et explorations (archives) |

## Lancer en local

```bash
# depuis la racine du repo
python -m http.server 8765
```

Ouvre [http://127.0.0.1:8765](http://127.0.0.1:8765).

## GitHub Pages

1. Repo → **Settings** → **Pages**
2. Source : branche `main`, dossier `/ (root)`
3. Site : `https://makoudiyani3-svg.github.io/PLug/`

## Stack

HTML + CSS (Broadsheet tokens) + JS léger. Pas de build step.
